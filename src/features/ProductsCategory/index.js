import { Button, Layout } from "antd";
import useProduct from "../../hooks/useGetProduct";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import useGetCategoryProduct from "../../hooks/useGetCategoryProduct";
export const ProductByCategory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").pop();
  const { data, isLoading } = useGetCategoryProduct(category);
  const handleClickProduct = (id) => {
    navigate(`/${id}`, { state: { id } });
  };

  return (
    <>
      {!isLoading && (
        <Layout>
          <Layout>
            <div className="container">
              {data.map((val) => (
                <div
                  key={val._id}
                  className="home-product"
                  onClick={() => handleClickProduct(val._id)}
                >
                  <div className="image">
                    <img
                      src={val.attachment}
                      alt="product"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="middle">
                    <div className="option">
                      <Button style={{ marginRight: "10px" }}>TÙY CHỌN</Button>
                      <Button>THÊM VÀO GIỎ HÀNG</Button>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name_product">{val.name}</div>
                    <div>
                      {val.price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Layout>
        </Layout>
      )}
    </>
  );
};
