import React, { useEffect, useState } from 'react';
import Banner from '../Home/Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Zoom from 'react-reveal/Zoom';
import { Row } from 'react-bootstrap';
import LoadAllProducts from '../LoadAllProducts/LoadAllProducts';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Banner />
            <div>
                <div className='mt-5'>
                    <h4 className='text-center text-uppercase fw-bold mb-5 pb-5' style={{ color: 'golden' }}>
                        <Zoom bottom cascade>
                            All service collection
                            <hr style={{width:'15%'}} className='mx-auto text-primary'/>
                        </Zoom>
                    </h4>

                </div>
                <div style={{ backgroundColor: '#5499C7' }}>
                    {/* <Zoom bottom cascade> */}
                    <div className='container'>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                                products.map(product => <LoadAllProducts key={product._id}
                                    product={product}
                                ></LoadAllProducts>)
                            }
                        </Row>
                    </div>
                    {/* </Zoom> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllProducts;