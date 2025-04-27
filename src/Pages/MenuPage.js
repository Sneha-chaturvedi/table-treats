import React from 'react'
import Menu from '../Components/Menu';

const MenuPage = () => {
    return (
        <>
            <div className="mt-5"></div>
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>Food Menu</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Menu />
        </>
    )
}
export default MenuPage;