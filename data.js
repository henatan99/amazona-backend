import bcrypt from 'bcryptjs';

const data = {
    users: [
      {
        name: 'Basir',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
      },
      {
        name: 'John',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false
      }
    ],
    products: [
      {
        id: '1',
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 10,
      },
      {
        id: '2',
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 120,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 17,
      },
      {
        id: '3',
        name: 'Lacoste Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 120,
        brand: 'Locoste',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
        countInStock: 0,
      },
      {
        id: '4',
        name: 'Puma Shirt',
        category: 'Shirts',
        image: '/images/p4.jpg',
        price: 130,
        brand: 'Puma',
        rating: 1.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 5,
      },
      {
        id: '5',
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p5.jpg',
        price: 150,
        brand: 'Nike',
        rating: 3.5,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 7,
      },
      {
        id: '6',
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p6.jpg',
        price: 110,
        brand: 'Nike',
        rating: 2,
        numReviews: 10,
        description: 'high quality product',
        countInStock: 0,
      },
    ],
  };
  
  export default data;
  