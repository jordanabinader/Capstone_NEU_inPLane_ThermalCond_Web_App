'use client';
import React, { useState, useEffect } from 'react';
import styles from './TestGraph.module.css';
import InputField from './InputField';
import Modal from './Modal';
import stylesBox from './KpiBox.module.css'

const TestGraph = () => {
    const [togglePosition, setTogglePosition] = useState('left');
    const [buttonStyle, setButtonStyle] = useState({});
    const [formData, setFormData] = useState({
        frequency: '',
        amplitude: '',
        duty_ratio: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const leftClick = () => {
        setButtonStyle({ left: '0' });
        setTogglePosition('left');
    };

    const rightClick = () => {
        setButtonStyle({ left: '110px' });
        setTogglePosition('right');
    };

    const handleTestStop = () => {
        // Stop test functionality
        console.log('Stop test')
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleTextChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        handleCloseModal();
        e.preventDefault();
        // Send formData to the API endpoint
        //const response = await fetch('YOUR_API_ENDPOINT', {
           // method: 'POST',
            //headers: {
             //   'Content-Type': 'application/json',
            //},
            //body: JSON.stringify(formData),
        //});

        //const data = await response.json();
        console.log(formData); // Or handle the response as needed
    };

    return (
        <div className='bg-white'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='rounded-md flex flex-col justify-between'>
                    <div className="bg-gray-200 h-full">
                    <iframe
                        title="Bokeh Plot"
                        src="http://localhost:8123"
                        width="100%"
                        height="100%"
                    />
                    </div>
                    <div className="flex justify-center mt-6"> 
                        <button 
                            className="rounded-md bg-red-600 px-3.5 py-2.5 mb-4 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
                            aria-current="page" 
                            type="button" 
                            onClick={handleTestStop}
                        >
                            Stop Test
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center ml-12 gap-40 border-b border-gray-100'>
                        <div className={stylesBox.value}>
                            <div className={stylesBox.title}>Diffusivity</div>
                            <div className={stylesBox.subtext}>xx</div>
                        </div>
                        <div className={stylesBox.value}>
                            <div className={stylesBox.title}>Conductivity</div>
                            <div className={stylesBox.subtext}>xx</div>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.buttonBox}>
                            <div id="btn" style={buttonStyle} className={styles.btn}></div>
                            <button type="button" className={styles.toggleBtn} onClick={leftClick}>Power</button>
                            <button type="button" className={styles.toggleBtn} onClick={rightClick}>D.R. %</button>
                        </div>
                        <form>
                            {togglePosition === 'left' && (
                            <div className='flex justify-center mt-4 mb-4'>
                            <div className='w-full md:w-96 mx-auto p-4'>
                                    <InputField
                                    label="Frequency"
                                    id="frequency"
                                    name="frequency"
                                    placeholder="60"
                                    unit='Hz'
                                    value={formData.frequency}
                                    onChange={handleTextChange}
                                    />
                                    <InputField
                                    label="Amplitude"
                                    id="amplitude"
                                    name="amplitude"
                                    placeholder="0"
                                    value={formData.amplitude}
                                    onChange={handleTextChange}
                                    />                        
                                </div>                        
                            </div>
                            )}
                            {togglePosition === 'right' && (
                            <div className='flex justify-center mt-4 mb-4'>
                                <div className='w-full md:w-96 mx-auto p-4'>
                                    <InputField
                                    label="Duty Ratio"
                                    id="duty_ratio"
                                    name="duty_ratio"
                                    placeholder="x"
                                    unit = '%'
                                    value={formData.duty_ratio}
                                    onChange={handleTextChange}
                                    />      
                            </div>
                                </div>
                            )}
                            <div className="flex justify-center">
                                <button 
                                className="rounded-md m-4 bg-green-500 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                aria-current="page"
                                type="button"
                                onClick={handleOpenModal}
                                >
                                Submit Changes
                                </button>
                                {isModalOpen && (
                                <Modal 
                                    action="Submit Changes"
                                    onCancel={handleCloseModal}
                                    onSubmit={handleSubmit}
                                />
                                
                                )}
                            </div>  
                        </form>
                    </div>                    
                </div>

            </div>            
        </div>


    );
};

export default TestGraph;
