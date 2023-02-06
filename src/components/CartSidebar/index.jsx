import React, {useEffect} from "react";
import {Button, Offcanvas, OffcanvasBody, OffcanvasHeader} from "reactstrap";
import {useSelector, useDispatch} from "react-redux";
import {toggleCartSidebar} from "../../services/cartSidebar/cartSidebarSlice";
import {Alert} from "reactstrap";
import {clearCart, getTotalPrice} from "../../services/cart/cartSlice";
import CartItem from "../CartItem";
import {useNavigate} from "react-router-dom";
const CartSidebar = () => {
  const {cartSidebarOpen} = useSelector((state) => state.cartSidebar);
  const {cartItems, itemsCount, totalPrice} = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartItems, dispatch]);
  return (
    <Offcanvas
      isOpen={cartSidebarOpen}
      direction="end"
      scrollable
      toggle={() => dispatch(toggleCartSidebar())}
    >
      <OffcanvasHeader toggle={() => dispatch(toggleCartSidebar())}>
        Seu carrinho ({itemsCount} produtos)
      </OffcanvasHeader>
      <OffcanvasBody>
        {cartItems.length === 0 ? (
          <Alert color="danger">Sem produtos no carrinho. </Alert>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </>
        )}
      </OffcanvasBody>
      <div className="py-4 px-3 d-flex flex-column">
        <span>Valor: {totalPrice} R$</span>
        <Button
          size="sm"
          color="dark"
          className="my-2"
          onClick={() => navigate("/cart")}
        >
          Ir para o carrinho
        </Button>
        {cartItems.length > 0 && (
          <Button
            size="sm"
            color="danger"
            onClick={() => dispatch(clearCart())}
          >
            Limpar carrinho
          </Button>
        )}
      </div>
    </Offcanvas>
  );
};

export default CartSidebar;
