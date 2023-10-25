import React from 'react'

export default function Footer() {
    return (
        <>
        <footer>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-4'>
                        <h2 className='text-center text-success fs-4 pt-5'>Electronics Company</h2>
                    </div>
                    <div className='col-md-4'>
                        <a href="#" className='text-decoration-none text-dark'>about us</a> <hr />
                        <a href="#" className='text-decoration-none text-dark'>contact us</a> <hr />
                        <a href="#" className='text-decoration-none text-dark'>contact us</a> 
                    </div>
                    <div className='col-md-4 text-center'>
                        <div>
                            <i class="fa-solid fa-phone me-3 text-success"></i>
                            <a href='#' className='text-decoration-none text-dark'>+007945318520</a><hr />
                        </div>
                        <div>
                            <i class="fa-solid fa-envelope me-3 text-success"></i>
                            <a href="#" className='text-decoration-none text-dark'>rama.Co@gmail.com</a><hr />
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot me-3 text-success"></i>
                            <a href="#" className='text-decoration-none text-dark'>Nablus-Rafedia</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-success text-center fs-3 fw-bold text-white mt-5 p-3'>MadeBy: Rama Majjad</div>
        </footer>
        </>
    )
}
