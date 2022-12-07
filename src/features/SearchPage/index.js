import { Button, Layout, Spin } from "antd";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchProduct } from "../../hooks/useSearchProduct";
export const SearchPage = () => {
    const navigate = useNavigate();
    let params = useParams();
    const { data, isLoading, isFetching } = useSearchProduct(params.searchText);

    const handleClickProduct = (id) => {
        navigate(`/${id}`, { state: { id } });
    };

    return (
        <>
            {(isLoading || isFetching) && <div style={{ textAlign: 'center' }}><Spin /></div>}
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
