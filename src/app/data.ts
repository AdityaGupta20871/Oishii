type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Paneer Tikka Pizza",
      desc: "Satisfy your taste buds with the rich flavors of marinated paneer tikka, bell peppers, and aromatic spices on a crispy crust.",
      img: "/temporary/p1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Masala Dosa Burger",
      desc: "Experience a fusion of South Indian and burger flavors with a masala dosa-inspired burger featuring a spiced potato patty, chutney, and crispy bun.",
      img: "/temporary/p2.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Butter Chicken Pizza",
      desc: "Indulge in the creamy and savory flavors of tender butter chicken, onions, and bell peppers on a pizza crust.",
      img: "/temporary/p3.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Spicy Vada Pav Burger",
      desc: "Enjoy the iconic street food flavors of Mumbai with a spicy vada pav burger featuring a spicy potato fritter in a bun.",
      img: "/temporary/p4.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Pav Bhaji Pizza",
      desc: "Experience the deliciousness of pav bhaji on a pizza with a tomato-based sauce, mixed vegetables, and a medley of spices.",
      img: "/temporary/p5.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Aloo Paratha Burger",
      desc: "Enjoy the flavors of aloo paratha stuffed in a burger with a spiced potato patty, onions, and chutney.",
      img: "/temporary/p6.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Chole Bhature Pizza",
      desc: "Experience the flavors of chole bhature on a pizza with spicy chickpea curry, onions, and herbs.",
      img: "/temporary/p7.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Tandoori Chicken Burger",
      desc: "Savor the smoky flavors of tandoori chicken in a burger with lettuce, onions, and mint chutney.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Palak Paneer Pizza",
      desc: "Delight in the flavors of creamy palak paneer, paneer cubes, and spices on a pizza crust.",
      img: "/temporary/p9.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p10.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p11.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img: "/temporary/p12.png",
      price: 22.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];