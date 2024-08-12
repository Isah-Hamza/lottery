import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/nlc-logo.png';
import design from '../../assets/images/design2.png';
import Input from '../../components/Inputs';
import Select from '../../components/Inputs/Select';
import successImg from '../../assets/images/success.png';

const index = () => {
    const [step, setStep] = useState(1);
    const [success,setSuccess] = useState(false);
    const next = () => setStep(prev => prev + 1);
    const prev = () => setStep(prev => prev - 1);
    const [isNew,setIsNew] = useState(false);

    const [selectedOperator, setSelectedOperator] = useState('');

    function makePayment() {
        var handler = RmPaymentEngine.init({
            key: "87y87qrknfgkjnsfgiuh57778", // Replace with public key
            customerId: "jefferson@ighalo.com", // Replace with customer id
            transactionId: "67897006679100998378", // Replace with transaction id
            firstName:"Firstname",
            lastName: "Lastname",
            email: "email@mail.com",
            amount: "200",
            narration: "Blah blah blah..",
            extendedData: { // Optional field. Details are available in the table
              customFields: [{
                name: "rrr",
                value: "340007777362"
              }],
              recurring: [{
                  "endDate": 1561935600000,
                  "frequency": "MON",
                  "maxUploadLimit": 0,
                  "numberOfTimes": 0,
                  "startDate": 1561478053677
              }]
            },
            onSuccess: function (response) { 
                console.log('callback Successful Response', response);
            },
            onError: function (response) { 
                console.log('callback Error Response', response);
                setSuccess(true);
            },
            onClose: function () { 
                console.log("closed");
            }
        });
        handler.openIframe();
    }

    const serviceOptions = [
        { label:'SALE OF GOVERNMENT ASSETS', value:null},
        { label:'PROMOTIONAL FEE', value:null},
        { label:'VIOLATION FEE', value:null},
        { label:'REGULARISATIN FEE', value:null},
        { label:'APPROVAL IN PRINCIPLE FEE', value:null},
        { label:'TENDER FEE', value:null},
        { label:'ANNUAL SUBSCRIPTION FEE', value:null},
        { label:'LICENCES FEE', value:null},
        { label:'REFUND', value:null},
    ]

    const newServiceOptions = [
        { label:'APPROVAL IN PRINCIPLE FEE', value:null}, 
    ]

    const operatorOptions = [
        { label:'BETKING', value:null},
        { label:'1XBET', value:null},
        { label:'BET NINJA', value:null},
        { label:'BETFUSE', value:null},
        { label:'FAST BET', value:null},
        { label:'SURE ODDS', value:null},
        { label:'OTHERS', value:'others'},
    ]

    const goBack = () => {
        if(step == 1) return;
        prev();
    }
    
    
  return (
    <>
        <div className='flex bg-[#f5f7f8]'>
        <div className="hidden lg:flex w-[500px] 2xl:w-[600px] h-screen bg-primary flex-col p-5 ">
            <img className='w-20' src={logo} alt="logo" />
            <div className="flex-1 bg-red-200n grid place-content-center">
                <img className='w-full' src={design} alt="design" />
            </div>
        </div>
        <div className="flex-1 h-screen overflow-auto p-5 sm:p-10 py-7 pb-10">
            { 
                step == 1 ? <div className="m-auto w-full lg:w-[720px] flex items-center text-sm mt-5">
                    {/* <span className='text-faint_black'>Already have an account ?</span> */}
                    <button onClick={() => setIsNew(false)} className={`rounded-t-md text-black px-5 py-3 rounded-sm  rounded-b-0  ${!isNew && 'bg-white border border-b-0 font-medium'}`} >Returning Operator</button>
                    <button onClick={() => setIsNew(true)} className={`rounded-t-md text-black px-5 py-3 rounded-sm  rounded-b-0 ${isNew && 'bg-white border border-b-0 font-medium'}`} >New Operator</button>
                </div> :
                <div className="flex justify-end items-center gap-2 text-sm">
                    {/* <span className='text-faint_black'>Already have an account ?</span> */}
                    <button onClick={goBack} className='font-medium bg-white text-black px-5 py-3 shadow rounded-sm' >GO BACK</button>
                </div>
            }
        {step == 1 ?  <div className={`mx-auto w-full lg:w-[720px] bg-white shadow-sm min-h-[200px] rounded-md p-6  pt-7  pb-8 ${!isNew && 'rounded-tl-[0px]'}`}>
                <div className="text-center text-sm">
                    <p className='text-lg font-semibold text-primary'>Pay For a Service</p>
                    <p className='text-faint_black' >NATIONAL LOTTERY REGULATORY COMMISSION (NLRC) - 011105100100.</p>
                </div>
                <div className="mt-14 grid sm:grid-cols-2 gap-6">
                    {
                      !isNew ?  <div className="col-span-2"><Select onChange={e => setSelectedOperator(e.target.value) } options={operatorOptions} label={'Select Operator'} /></div>  : null
                    }
                    {
                        selectedOperator == 'others' || isNew ? 
                        <>
                            <div className="col-span-2"><Input label={'Operator Name'} placeholder={'e.g NLRC BET'}/></div>
                            <div className="col-span"><Input label={'Email'} placeholder={'e.g nlrc.bet@hotmail.com'}/></div>
                            <div className="col-span"><Input label={'Phone Number'} placeholder={'e.g 09030499205'}/></div>
                        </>
                        : 
                        null
                    }
                    <div className="col-span-2"><Select options={isNew ? newServiceOptions : serviceOptions} label={'Select Service'} /></div>
                    {/* <div className=""><Select label={'Billing Currency'} /></div> */}
                    <div className="col-span-2"><Input label={'Amount'} placeholder={'₦ 120,000'}/></div>
                    {/* <div className=""><Select label={'Country of Operation'} /></div> */}
                    {/* <div className=""><Select label={'State/County'} /></div> */}
                    <div className="sm:col-span-2">
                        <p className='text-sm mb-1' >Description</p>
                        <textarea className='placeholder:text-sm p-3 border outline-none w-full h-28 rounded' 
                            placeholder="I'm making payment on behalf ..." />
                    </div>
                    <div className="text-sm -mt-5 sm:col-span-2 flex gap-2 items-start text-faint_black">
                        <input id='check' type='checkbox' className='accent-primary mt-2'/>
                        <label htmlFor='check' className='pt-1' >Please tick this box to signify that you've read and accepted our terms and conditions and that the information provided above are accurate.</label>
                    </div>
                    <div className="mt-10 flex justify-center sm:col-span-2">
                        <button onClick={next} className='uppercase px-5 py-3 rounded text-sm bg-primary text-white font-semibold' >Continue To Pay</button>
                    </div>
                </div>
            </div>
            : step == 2 ?
            <div className="mt-20 mx-auto w-full sm:w-[550px] bg-white shadow min-h-[200px] rounded-md p-6 pt-7  pb-8">
                <div className="text-center text-sm mb-5">
                    <p className='text-lg font-semibold text-opacity-90 mb-1 text-primary'>Please Verify Your Details.</p>
                    <p className='text-faint_black' >Please verify that the information below is accurate as the transaction is irreversible </p>
                </div>
                <div className="border rounded-md p-4">
                    <p className='underline'>BETFUSE INC. LIMITED</p>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="">
                            <p className='text-faint_black' >Service</p>
                            <p className='font-medium text-black/90 text-sm' >Annual Legal Duties</p>
                        </div>
                        <div className="">
                            <p className='text-faint_black' >Amount</p>
                            <p className='font-medium text-black/90 text-sm' >₦ 200,000</p>
                        </div>
                        <div className="">
                            <p className='text-faint_black' >Date</p>
                            <p className='font-medium text-black/90 text-sm' >12th June, 2024</p>
                        </div>
                        <div className="">
                            <p className='text-faint_black' >Time</p>
                            <p className='font-medium text-black/90 text-sm' >12:23:05</p>
                        </div>
                        <div className="col-span-2">
                            <p className='text-faint_black' >Narration</p>
                            <p className='text-sm font-medium text-black/90 line-clamp-2' >The description of the transaction goes thus..</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center col-span-2">
                        <button onClick={
                            makePayment
                            // () => setSuccess(true)
                            } className='uppercase px-5 py-3 rounded text-sm bg-primary text-white font-semibold' >Pay ₦ 200,000</button>
                </div>
            </div>    :
            <div>
            </div>
        }
        </div>
        </div>
        { success ? <div className="p-5 text-sm text-center fixed inset-0 bg-white/90 grid place-content-center ">
            <div className="mx-auto">
            <img className='w-20' src={successImg} alt="success" />
            </div>
            <p className='text-lg font-medium text-primary mt-4'>Payment completed</p>
            <p >Congratulations. Your payment was successful. <br /> You can close this modal now.</p>
            <div className="mt-5 flex justify-center">
                <button onClick={() => 
                    {
                        setSuccess(false);
                        setStep(1);
                    }
                    } className='uppercase px-5 py-2.5 rounded text-sm bg-primary text-white font-semibold shadow' >PROCEED</button>
            </div>
        </div> : null }
    </>
  )
}

export default index 
