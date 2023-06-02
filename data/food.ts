import { MenuItemType } from "../types/menuItemType";

export const foodList: MenuItemType[] = [
  {
    id: 1,
    name: "Burger",
    price: 10,
    description: "A delicious burger",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Lunch",
    tags: ["Burger", "Lunch"],
    type: "Food",
    likes: 0,
    isRecomended: true,
  },
  {
    id: 2,
    name: "Pizza",
    price: 20,
    description: "A delicious pizza",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Dinner",
    tags: ["Pizza", "Dinner"],
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 3,
    name: "Tea",
    price: 5,
    description: "A cup of tea",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Drinks",
    tags: ["Tea", "Drinks"],
    type: "Drink",
    likes: 0,
    isRecomended: true,
  },

  {
    id: 4,
    name: "Coffee",
    price: 5,
    description: "A cup of coffee",
    image: "https://cdn.auth0.com/blog/whatabyte/coffee-sm.png",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Drinks",
    tags: ["Coffee", "Drinks"],
    type: "Drink",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 5,
    name: "Fries",
    price: 5,
    description: "A delicious fries",
    image:
      "https://images.unsplash.com/photo-1627707158686-b380854d12c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Lunch",
    tags: ["Fries", "Lunch"],
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 6,
    name: "Sushi",
    price: 22,
    description: "A delicious sushi",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Dinner",
    tags: ["Chinese", "Dinner"],
    type: "Food",
    likes: 0,
    isRecomended: true,
  },
  {
    id: 7,
    name: "Ramen",
    price: 15,
    description: "A delicious ramen",
    image:
      "https://images.unsplash.com/photo-1617421753170-46511a8d73fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Dinner",
    tags: ["Chinese", "Dinner"],
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 8,
    name: "Ice Cream",
    price: 5,
    description: "A delicious ice cream",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Dessert",
    tags: ["Ice Cream", "Dessert"],
    type: "Desert",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 9,
    name: "Cake",
    price: 5,
    description: "A delicious cake",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=936&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Dessert",
    tags: ["Cake", "Dessert"],
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 10,
    name: "Hot Dog",
    price: 5,
    description: "A delicious hot dog",
    image:
      "https://images.unsplash.com/photo-1585238340475-400f04d2c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1363&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    category: "Lunch",
    tags: ["Hot Dog", "Lunch"],
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
  {
    id: 11,
    name: "Pasta",
    price: 5,
    description: "A delicious pasta",
    image:
      "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    addedDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisi aliquet nunc, vitae ultricies nisl nunc eu nunc.",
    tags: ["Pasta", "Dinner"],
    category: "Dinner",
    type: "Food",
    likes: 0,
    isRecomended: false,
  },
];
