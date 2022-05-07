function Product() {

    this.id;
    this.name;
    this.description;
    this.price;
    this.brand;
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

    this.getImage = function(index) {
        if (index === undefined) {
            return this.images[0];
        }
        return this.images[index];
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
            if (review.id === reviewId) {
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

Product.prototype.getFullInformation = function() {
    let results = 'About:\n';
    Object.keys(this).forEach(function(key) {
        if (this[key] && typeof this[key] !== 'function') {
            if (key === 'reviews') {
                results += key + ' - ' + this.getAverageRating() + '\n';
            } else {
                results += key + ' - ' + this[key] + '\n';
            }
        }
    }, this);
    return results;
}

Product.prototype.getPriceForQuantity = function(q) {
    return this.price * q;
}

Product.prototype.getSet = function(key, value) {
    if (value === undefined) {
        return this[key];
    } else {
        this[key] = value;
    }
}

function Clothes() {

    Product.call(this);

    this.sizes = [];
    this.activeSize;
    
    this.setSizes = function(sizes) { this.sizes = sizes; }
    this.getSizes = function() { return this.sizes; }
    
    this.addSize = function(size) {
        this.sizes.push(size);
    }

    this.deleteSize = function(index) {
        return this.sizes.splice(index, 1)[0];
    }

}

Clothes.prototype = Object.create(Product.prototype);
Clothes.prototype.constructor = Clothes;
Clothes.prototype.material = undefined;
Clothes.prototype.color = undefined;
Clothes.prototype.setMaterial = function(material) {
    this.material = material;
}
Clothes.prototype.getMaterial = function() {
    return this.material;
}
Clothes.prototype.setColor = function(color) {
    this.color = color;
}
Clothes.prototype.getColor = function() {
    return this.color;
}

function Electronics() {

    Product.call(this);

}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;
Electronics.prototype.warranty = undefined;
Electronics.prototype.power = undefined;
Electronics.prototype.setWarranty = function(warranty) {
    this.warranty = warranty;
}
Electronics.prototype.getWarranty = function() {
    return this.warranty;
}
Electronics.prototype.setPower = function(power) {
    this.power = power;
}
Electronics.prototype.getPower = function() {
    return this.power;
}

searchProducts = function (products, search) {
    let results = [];
    for (product of products) {
        if ((product.name && product.name.includes(search)) || (product.description && product.description.includes(search))) {
            results.push(product);
        }
    }
    return results;
}

sortProducts = function (products, sortRule) {
    return products.sort(function(a, b) {
            return a[sortRule] > b[sortRule] ? 1 : a[sortRule] === b[sortRule] ? 0 : -1;
    });
}

//тесты

clothes = new Clothes;
electronics = new Electronics;

clothes.addSize('M');
console.log(clothes.getSizes()); //['M']
clothes.setSizes(['M', 'S', 'L', 'XL']);
clothes.deleteSize(1);
console.log(clothes.getSizes()); //['M', 'L', 'XL']

clothes.setImages(['a', 'b', 'c']);
console.log(clothes.getImage(1)); //b
console.log(clothes.getImage()); //a

clothes.getSet('name', 'test');
console.log(clothes.getSet('name')); //test

clothes.setPrice(10);
console.log(clothes.getPriceForQuantity(10)); //100

electronics.addReview({
    id: 0,
    rating: {
        service: 1,
        price: 1,
        value: 1,
        quality: 5,
    },
})
console.log(electronics.getReviews()[0].id) //0
electronics.setReviews([
    {
        id: 0,
        rating: {
            service: 1,
            price: 1,
            value: 1,
            quality: 5,
        },
    },
    {
        id: 1,
        rating: {
            service: 3,
            price: 2,
            value: 2,
            quality: 3,
        },
    },
    {
        id: 2,
        rating: {
            service: 3,
            price: 1,
            value: 1,
            quality: 5,
        },
    },
    {
        id: 3,
        rating: {
            service: 5,
            price: 5,
            value: 5,
            quality: 5,
        },
    },
    
])
console.log(electronics.getAverageRating()) //3
console.log(electronics.getReviewById(2).rating.service) //3
electronics.addReview({
    id: 11,
    rating: {
        service: 1,
        price: 1,
        value: 1,
        quality: 5,
    },
})
console.log(electronics.getReviewById(11).rating.service); //1
electronics.deleteReview(11);
console.log(electronics.getReviewById(11)) //undefined

productsArray = [
    new Clothes(),
    new Clothes(),
    new Electronics(),
    new Electronics()
];
productsArray[0].setDescription('clothes description test');
productsArray[1].setName('clothes name test');
productsArray[2].setDescription('electronics description test');
productsArray[3].setName('electronics name test');
console.log(searchProducts(productsArray, 'elect').length); //2
console.log(searchProducts(productsArray, 'ics n').length); //1
console.log(searchProducts(productsArray, 'name').length); //2
console.log(searchProducts(productsArray, 'test').length); //4

productsArray[0].setPrice(10);
productsArray[1].setPrice(9);
productsArray[2].setPrice(8);
productsArray[3].setPrice(7);
console.log(sortProducts(productsArray, 'price')[0].getPrice()) //7

productsArray[0].setName('d');
productsArray[1].setName('c');
productsArray[2].setName('b');
productsArray[3].setName('a');
console.log(sortProducts(productsArray, 'name')[0].getName()) //a

console.log(clothes.getFullInformation());
console.log(electronics.getFullInformation());
console.log(productsArray[0].getFullInformation());