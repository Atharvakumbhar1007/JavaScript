class Item {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}

class Product extends Item {
    constructor(id, title, price, description, category, image) {
        super(id, title, price);
        this.description = description;
        this.category = category;
        this.image = image;
    }

    render() {
        return `
      <div class="product-card">
        <img src="${this.image}" alt="${this.title}">
        <h3>${this.title}</h3>
        <p><strong>${this.getFormattedPrice()}</strong></p>
        <p>${this.category}</p>
      </div>
    `;
    }
}
//${}- template lietral interpolation.

// ---------------- INVENTORY MANAGER ----------------
class InventoryManager {
    constructor() {
        this.products = [];//original full list
        this.filteredProducts = []; //modified list (search, filter, sort)
    }

    async fetchProducts() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const data = await response.json();
            /*The constructor runs automatically when we create an 
            object from the class.
            *ASYNC means this function handles asynchronous operations.
            It allows us to use await inside it.
            *API returns data in JSON format.
            response.json() converts it into JavaScript objects.
            await waits for conversion.*/

            // Convert JSON to Product Objects
            this.products = data.map(item =>
                new Product(
                    item.id,
                    item.title,
                    item.price,
                    item.description,
                    item.category,
                    item.image
                )
            );

            this.filteredProducts = [...this.products];
            this.displayProducts();

        } catch (error) {
            document.getElementById("errorMessage").textContent = error.message;
        }
    }

    displayProducts() {
        const container = document.getElementById("productContainer");
        container.innerHTML = "";

        this.filteredProducts.forEach(product => {
            container.innerHTML += product.render();
        });
    }

    searchProducts(keyword) {
        this.filteredProducts = this.products.filter(product =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
        );
        this.displayProducts();
    }

    filterByPrice(type) {
        if (type === "low") {
            this.filteredProducts = this.products.filter(p => p.price < 50);
        } else if (type === "high") {
            this.filteredProducts = this.products.filter(p => p.price >= 50);
        } else {
            this.filteredProducts = [...this.products];
        }
        this.displayProducts();
    }

    sortProducts(option) {
        if (option === "priceLowHigh") {
            this.filteredProducts.sort((a, b) => a.price - b.price);
        } else if (option === "priceHighLow") {
            this.filteredProducts.sort((a, b) => b.price - a.price);
        } else if (option === "nameAZ") {
            this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === "nameZA") {
            this.filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        }
        this.displayProducts();
    }
}

// ---------------- APP INITIALIZATION ------------------

const manager = new InventoryManager();
manager.fetchProducts();

// Event Listeners
document.getElementById("searchInput").addEventListener("input", (e) => {
    manager.searchProducts(e.target.value);
});

document.getElementById("priceFilter").addEventListener("change", (e) => {
    manager.filterByPrice(e.target.value);
});

document.getElementById("sortOption").addEventListener("change", (e) => {
    manager.sortProducts(e.target.value);
});

// --------- Random Background Image on Load In CSS ---------
const backgrounds = [
    "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1503264116251-35a269479413"
];

const randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";