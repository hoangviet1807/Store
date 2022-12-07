import { Button, Layout, Spin } from "antd";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import useGetCategoryProduct from "../../hooks/useGetCategoryProduct";
import { configImg } from "../../common/constant";
export const ProductByCategory = () => {
  const navigate = useNavigate();
  const params = useParams()
  const category = params.category
  const { data, isLoading, isFetching, isSuccess } = useGetCategoryProduct(category);
  const handleClickProduct = (id) => {
    navigate(`/${id}`, { state: { id } });
  };

  return (
    <>
      {(!isSuccess) && <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} size="large" />}
      {(isSuccess) && (
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
                      src={configImg + val.attachment[0].preview}
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
