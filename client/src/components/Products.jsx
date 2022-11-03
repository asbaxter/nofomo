import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <PrimaryButton onClick={() => navigate("/products/productCreate")}>
          Post
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
