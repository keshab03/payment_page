import React, { useEffect } from 'react'
import { useState } from 'react'
import './bodypic.css'
const Bodypic = () => {

    const [radio, setRadio] = useState('option1')
    const [sub1] = useState(80)
    const [sub2] = useState(150)
    const [sub3] = useState(250)
    const [sub4] = useState(330)
    const [total, setTotal] = useState(Math.ceil(sub1 * 12.5))
    const [discount, setDiscount] = useState(total - Math.ceil(total * .98))
    const [subTotal, setSubTotal] = useState(Math.ceil((total - discount) * 1.18))
    const [isDisabled, setDisabled] = useState(true);
    const [backgroundColor1, setBackgroundColor1] = useState('');
    const [backgroundColor2, setBackgroundColor2] = useState('');
    const [backgroundColor3, setBackgroundColor3] = useState('');

    const handleDisableRadio = () => {
        setDisabled(true);
    };
   
    useEffect(() => {
        setDiscount(total - Math.ceil(total * .98))
        setSubTotal(Math.round((total - discount) * 1.18))
    }, [discount, total])




    const handleRadio = (e) => {
        setRadio(e.target.value)
        calculateTotal(e.target.value);
    }

    const btn1 = () => {
        setBackgroundColor2(' ')
        setBackgroundColor3(' ')
        setBackgroundColor1('#47BA68')

    }

    const btn2 = () => {
        setBackgroundColor1(' ')
        setBackgroundColor3(' ')
        setBackgroundColor2('#47BA68')
    }


    const btn3 = () => {
        setBackgroundColor1(' ')
        setBackgroundColor2(' ')
        setBackgroundColor3('#47BA68')
    }

    const calculateTotal = (option) => {
        if (option === 'option1') {
            setTotal(Math.ceil(sub1 * 12.5) - 1)
        }
        else if (option === 'option2') {
            setTotal(Math.ceil(sub2 * 12) - 1)
        }
        else if (option === 'option3') {
            setTotal(Math.ceil(sub3 * 6) - 1)
        }
        else if (option === 'option4') {
            setTotal(Math.ceil(sub4 * 3) - 1)
        }
    }

    return (
        <div id='body'>
            <div id='offer'>
                <h4>Accross curated courses worth</h4>
                <h1>₹ <del>18,500</del> at just <span style={{ color: '#0048FF' }}>₹ 99</span> per year!</h1>

                <div id='offerlist'>
                    <i class="fa-sharp fa-solid fa-book-open-reader"></i> <span style={{ color: '#0048FF', marginLeft: '20px' }}>100+</span> Job relevent courses
                    <br /><br />
                    <i class="fa-regular fa-clock"></i> <span style={{ color: '#0048FF', marginLeft: '20px' }}>20,000+</span> Hours of content
                    <br /><br />
                    <i class="fa-solid fa-tv"></i> <span style={{ color: '#0048FF', marginLeft: '20px' }}>Exclusive</span> webinar access
                    <br /><br />
                    <i class="fa-solid fa-graduation-cap"></i> <span style={{ marginLeft: '20px' }}>Scholarship</span>  <span style={{ color: '#0048FF' }}>₹94,500</span>
                    <br /><br />
                    <i class="fa-solid fa-ban"></i> <span style={{ color: '#0048FF', marginLeft: '20px' }}>Ad Free</span> learning experience
                </div>
            </div>


            <div id='subscribe'>
                <div id='pay'>
                    <div id='signup'>
                        <h5>1</h5>
                        <span>SignUp</span>
                    </div>
                    <div id='subs'>
                        <h5>2</h5>
                        <span>Subscribe</span>
                    </div>
                </div>

                <div id='heading'>
                    <h2>Select your subscription plan</h2>
                </div>



                <div id='btn'>
                    <div className="radio" style={{ backgroundColor: '#BEBEBE' }}>
                        <div id='upper1'>
                            <span>Offer expired</span>
                        </div>
                        <div className='box' >
                            <input style={{ marginBottom: '10px', cursor: 'default' }} type="radio" value="option1" checked={radio === 'option1'} disabled={isDisabled} onClick={handleDisableRadio} onChange={handleRadio} />
                            <span style={{ marginBottom: '10px' }}>12 Month Subscription</span>

                            <div className='amount1'>
                                <span style={{ marginLeft: '60px' }}>Total ₹{Math.ceil(sub1 * 12.5) - 1} </span> <span style={{ marginLeft: '60px' }}>₹{sub1} /mo </span>
                            </div>

                        </div>
                    </div>
                    <div className="radio" style={{ background: backgroundColor1 }}>
                        <div id='upper2'>
                            <span>Recomended</span>
                        </div>
                        <div className='box'>
                            <input style={{ marginBottom: '10px' }} type="radio" value="option2" onClick={btn1} checked={radio === 'option2'} onChange={handleRadio} />
                            <span style={{ marginBottom: '10px' }}>12 Month Subscription</span>


                            <div className='amount1'>
                                <span style={{ marginLeft: '60px' }}>Total ₹{Math.ceil(sub2 * 12) - 1} </span> <span style={{ marginLeft: '60px' }}>₹{sub1} /mo </span>
                            </div>

                        </div>
                    </div>

                    <div className="radio" style={{ background: backgroundColor2 }} >
                        <div className='box'>
                            <input type="radio" value="option3" checked={radio === 'option3'} onClick={btn2} onChange={handleRadio} />
                            <span>6 Month Subscription</span>


                            <div className='amount'>
                                <span style={{ marginLeft: '70px' }}>Total ₹{Math.ceil(sub3 * 6) - 1} </span> <span style={{ marginLeft: '70px' }}>₹{sub1} /mo </span>
                            </div>

                        </div>
                    </div>

                    <div className="radio" style={{ background: backgroundColor3 }}>
                        <div className='box'>
                            <input type="radio" value="option4" checked={radio === 'option4'} onClick={btn3} onChange={handleRadio} />

                            <span>3 Month Subscription</span>


                            <div className='amount'>
                                <span style={{ marginLeft: '70px' }}>Total ₹{Math.ceil(sub4 * 3)} </span> <span style={{ marginLeft: '70px' }}>₹{sub1} /mo </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div id='subfee'>
                    <span>Subscription Fee</span> <span style={{ marginLeft: '54%' }}>{total}</span>
                </div>

                <div id='offertime'>
                    <span style={{ marginLeft: '3%' }}>Limited time offer</span><span style={{ marginLeft: '55%' }}>- ₹{discount}</span>
                    <br />
                    <i class="fa-regular fa-clock" style={{ marginLeft: '3%' }}></i> Offer valid till 25th March 2023
                </div>
                <br />
                <div id='gst'>
                    <span>Total(incl. of 18% GST)</span> <span style={{ marginLeft: '30%' }}>₹ {subTotal}</span>
                </div>

                <div id='buttons'>
                    <div id='cancle'>
                        <button>CANCLE</button>
                    </div>

                    <div id='proceed'>
                        <button>PROCEED TO PAY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bodypic