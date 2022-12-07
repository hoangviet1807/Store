import { Button, Layout } from "antd";
import useProduct from "../../hooks/useGetProduct";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import { ENV } from "../../config/config";
export const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProduct();

  const handleClickProduct = (id) => {
    navigate(`/${id}`, { state: { id } });
  };

  console.log("data", data);
  return (
    <>
      {isLoading && <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} size="large" />}
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
                      src={ENV + val.attachment[0].fileName}
                      alt="product"
                      style={{ width: "100%", objectFit: 'cover', height: '22em' }}
                      loading="lazy"
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
