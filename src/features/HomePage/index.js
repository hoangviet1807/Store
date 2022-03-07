import { Button, Layout } from "antd";
import useProduct from "../../hooks/useGetProduct";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProduct();

  const handleClickProduct = (id) => {
    console.log("val", id);
    navigate(`/${id}`, { state: { id } });
  };
  return (
    <>
      {!isLoading && (
        <Layout>
          <Layout>
            <div
              className="container"
              style={{
                padding: "30px 10%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
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
