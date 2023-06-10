// {
//   "data": {
//     "id": "1",
//     "type": "menu_item",
//     "attributes": {
//       "title": "skuma",
//       "price": 0,
//       "preparation_time": "23",
//       "photo_url": "https://storage.googleapis.com/restaurant_ke/CJs/CJ1/44e66dfb-c6d0-4bbb-aee8-845994df4086.png",
//       "description": "dsds",
//       "tags": [
//         "deserts"
//       ],
//       "likes": null,
//       "dislikes": null,
//       "created_at": "2022-11-17T12:32:33.871Z",
//       "updated_at": "2022-11-17T12:32:33.871Z"
//     },
//     "links": {
//       "self": "http://www.example.com/menu_items/1"
//     }
//   }
// }

export interface APIFormart {
  data: {
    id: string;
    type: string;
    attributes: {
      title: string;
      price: number;
      preparation_time: string;
      photo_url: string;
      description: string;
      tags: string[];
      likes: number;
      dislikes: number;
      created_at: string;
      updated_at: string;
    };
    links: {
      self: string;
    };
  };
}

export interface FoodType {
  id: string;
  type: string;
  attributes: {
    title: string;
    price: number;
    preparation_time: string;
    photo_url: string;
    description: string;
    tags: string[];
    likes: number;
    dislikes: number;
    created_at: string;
    updated_at: string;
  };
  links: {
    self: string;
  };
}
