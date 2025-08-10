function showCafeQuantityNotification() {
  const cafeQuantityToast = document.getElementById("cafeQuantityToast");
  const quantityErrorToast =
    bootstrap.Toast.getOrCreateInstance(cafeQuantityToast);
  quantityErrorToast.show();
}

function doQuantityErrorActions(item) {
  showCafeQuantityNotification();
  return item;
}

export const addToCart = (product, cartItems) => {
  const existingItem = cartItems.find(
    (item) => item.productId === product.productId
  );
  if (!product.inStock) {
    throw new Error("There is no stock for the product");
  }
  if (existingItem) {
    const updatedCartItems = cartItems.map((item) =>
      item.productId === product.productId
        ? { ...item, quantity: item.quantity + product.quantity }
        : item
    );

    if (updatedCartItems.some((item) => item.quantity > 9)) {
      showCafeQuantityNotification();
      throw new Error("Quantity cannot be more than 9");
    }

    return updatedCartItems;
  } else {
    const newCartItem = { ...product };
    return [...cartItems, newCartItem];
  }
};

export const removeFromCart = (productId, cartItems) => {
  const updatedCartItems = cartItems.filter(
    (item) => item.productId !== productId
  );
  return updatedCartItems;
};

export const increaseQuantity = (productId, cartItems) => {

  const updatedCartItems = cartItems.map((item) =>
    item.productId === productId
      ? item.quantity < 9
        ? { ...item, quantity: item.quantity + 1 }
        : doQuantityErrorActions(item)
      : { ...item }
  );
  return updatedCartItems;
};

export const decreaseQuantity = (productId, cartItems) => {
  const updatedCartItems = cartItems.map((item) =>
    item.productId === productId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  return updatedCartItems;
};
