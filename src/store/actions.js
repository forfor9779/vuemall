import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      oldProduct = context.state.cartlist.find(
        item => item.iid === payload.iid
      );
      if (!oldProduct) {
        payload.isChecked = true;
        payload.count = 1;
        // 将添加商品的情况分发到另一个特定的方法中，使得mutations中的方法只对应一种改变
        context.commit(ADD_TO_CART, payload);
        resolve("添加新的商品")
      } else {
        // 将数量加1的情况分发到一个特定的方法中
        context.commit(ADD_COUNTER, oldProduct);
        // oldProduct.count += 1
        resolve("当前商品数量+1")
      }
    });
  }
};
