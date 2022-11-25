import Item from "../models/items";

export const listItems = async () => {
  return await Item.find().exec();
};

export const getStat = async () => {
  
  return await Item.find();
}

export const getItem = async (id: any) => {
  return await Item.findById(id);
};

export const postItem = async (item: any) => {
  const { sku, name, price, quantity, size, tags, category, image } = item;
  const result = new Item({ sku, name, price, quantity, size, tags, category, image });
  return await result.save();
};

export const putItem = async (id: any, item: any) => {
  const { sku, name, price, quantity, size, tags, category, image } = item;
  const theItem = await Item.findById(id);

  theItem.sku = sku;
  theItem.name = name;
  theItem.price = price;
  theItem.quantity = quantity;
  theItem.size = size;
  theItem.tags = tags;
  theItem.category = category;
  theItem.image = image;

  return await theItem.save();
};

export const deleteItem = async (id: any) => {
  return await Item.findByIdAndDelete(id);
};
