function Product() {

    this.id;
    this.name;
    this.description;
    this.price;
    this.brand;
    this.sizes = [];
    this.activeSize;
    this.quantity;
    this.date;
    this.reviews = [];
    this.images = [];

    this.setId = function(id) { this.id = id; }
    this.getId = function() { return this.id; }
    
    this.setName = function(name) { this.name = name; }
    this.getName = function() { return this.name; }

    this.setDescription = function(description) { this.description = description; }
    this.getDescription = function() { return this.description; }

    this.setPrice = function(price) { this.price = price; }
    this.getPrice = function() { return this.price; }
    
    this.setBrand = function(brand) { this.brand = brand; }
    this.getBrand = function() { return this.brand; }
    
    this.setSizes = function(sizes) { this.sizes = sizes; }
    this.getSizes = function() { return this.sizes; }
    
    this.setActiveSize = function(activeSize) { this.activeSize = activeSize; }
    this.getActiveSize = function() { return this.activeSize; }
    
    this.setQuantity = function(quantity) { this.quantity = quantity; }
    this.getQuantity = function() { return this.quantity; }
    
    this.setDate = function(date) { this.date = date; }
    this.getDate = function() { return this.date; }
    
    this.setReviews = function(reviews) { this.reviews = reviews; }
    this.getReviews = function() { return this.reviews; }
    
    this.setImages = function(images) { this.images = images; }
    this.getImages = function() { return this.images; }

    this.addSize = function(size) {
        this.sizes.push(size);
    }

    this.deleteSize = function(index) {
        return this.sizes.splice(index, 1)[0];
    }

    this.getImage = function(index) {
        if (index === undefined) {
            return this.image[0];
        }
        return image[index];
    }

    this.addReview = function(review) {
        this.reviews.push(review);
    }

    this.getReviewById = function(reviewId) {
        for (review of this.reviews) {
            if (review.id === reviewId) {
                return review;
            }
        }
    }

    this.deleteReview = function(reviewId) {
        const index = this.reviews.findIndex(function(review) {
            if (review.id = reviewId) {
                return true;
            }
        });
        if (index != -1) {
            return this.reviews.splice(index, 1)[0];
        }
    }

    this.getAverageRating = function() {
        const sum = this.reviews.reduce(function(sum,review) {
            return sum+(review.rating.price + review.rating.value + review.rating.quality + review.rating.service)/4;
        }, 0);
        return sum/this.reviews.length;
    }
}

searchProducts = function (products, search) {
    let results = [];
    for (product of products) {
        if (product.name.includes(search) || product.description.includes(search)) {
            results.push(product);
        }
    }
    return results;
}

sortProducts = function (products, sortRule) {
    products.sort(function(a, b) {
        if (sortRule === 'id' || sortRule === 'price') {
            return a[sortRule] - b[sortRule];
        } else if (sortRule === 'name') {
            return a[sortRule] > b[sortRule];
        }
    });
}