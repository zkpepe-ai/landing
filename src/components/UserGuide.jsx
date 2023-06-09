import SyncSwap from '../assets/images/SyncSwap.png';
import iZUMI from '../assets/images/iZUMI.png';
import arrow from '../assets/images/arrow.png';
import {useEffect, useState} from 'react';
import stage_1_wallet from '../assets/videos/stage_1_wallet.mp4';
import stage_2_get_eth from '../assets/videos/stage_2_get_eth.mp4';
import stage_3_bridge from '../assets/videos/stage_3_bridge.mp4';
import stage_4_swap from '../assets/videos/stage_4_swap.mp4';
import step1 from '../assets/images/step1.svg';
import step1_active from '../assets/images/step1_active.svg';
import step2 from '../assets/images/step2.svg';
import step2_active from '../assets/images/step2_active.svg';
import step3 from '../assets/images/step3.svg';
import step3_active from '../assets/images/step3_active.svg';
import step4 from '../assets/images/step4.svg';
import step4_active from '../assets/images/step4_active.svg';

function UserGuide() {
    const [showStep, setShowStep] = useState('create');
    const [stepContent, setStepContent] = useState('');

    useEffect(() => {
        setShowStep('create')
        setStepContent(
            <div>
                <h2 className="lg:text-3xl text-xl">Step1 - Create Wallet</h2>
                <p className='text-sm text-white mt-4 text-left font-mono'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
            </div>
        )
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.id;

        if (id === 'create') {
            setShowStep('create')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step1 - Create Wallet</h2>
                    <p className='text-sm text-white mt-4 text-left font-mono'>To create a MetaMask wallet, visit MetaMask.io, install the extension, set a password, jot down the seed phrase, confirm it, choose a network, and voila! You're all set to start using your wallet.</p>
                </div>
            )
        } else if (id === 'get') {
            setShowStep('get')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step2 - Get ETH</h2>
                    <p className='text-sm text-white mt-4 text-left font-mono'>To get Ethereum (ETH) in your MetaMask wallet, either purchase ETH directly within MetaMask or transfer ETH from a cryptocurrency exchange or another wallet by copying your MetaMask wallet address and initiating the transfer.</p>
                </div>
            )
        } else if (id === 'bridge') {
            setShowStep('bridge')
            setStepContent(
                <div>
                    <h2 className="lg:text-3xl text-xl">Step3 - Bridge</h2>
                    <p className='text-sm text-white mt-4 text-left font-mono'>To bridge Ethereum (ETH) to the zkSync network, visit <a className="underline text-main" href="https://bridge.zksync.io/">https://bridge.zksync.io/</a>, connect your MetaMask wallet, deposit ETH, confirm in MetaMask, and wait for confirmation on both networks.</p>
                </div>
            )
        } else if (id === 'swap') {
            setShowStep('swap')
            setStepContent(
                <div className="grid grid-cols-2">
                    <div className="col-span-2">
                        <h2 className="lg:text-3xl text-xl">Step4 - Swap!</h2>
                        <p className='text-sm text-white mt-4 text-left font-mono'>To swap Ethereum (ETH) to AIPEPE tokens, connect your MetaMask wallet, select the tokens to swap, enter the desired amount, confirm the transaction, and follow the prompts to complete the swap.</p>
                    </div>
                    <div className="col-span-1 text-white text-sm text-left">
                        <a href="https://syncswap.xyz/" className='flex'>
                            <img src={SyncSwap} alt="SyncSwap" className="mt-3 h-8"/>
                            <img src={arrow} className="ml-2 mt-6 h-4"/>
                        </a>
                    </div>
                    <div className="col-span-1 text-white text-sm text-left">
                        <a href="https://izumi.finance/" className='flex'>
                            <img src={iZUMI} alt="iZUMI" className="mt-4 h-8"/>
                            <img src={arrow} className="ml-2 mt-6 h-4"/>
                        </a>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="bg-dark lg:pt-48 pt-12">
            <div className="container mx-auto max-w-screen-lg">
            <h1 className='mb-16 lg:text-5xl text-2xl text-center'>//USER GUIDE//</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div className="col-span-1" data-aos="fade-right">
                        <video autoPlay muted loop id="Step1Video" className={showStep === 'create' ? 'w-full' : 'w-full hidden'}>
                            <source src={stage_1_wallet} type="video/mp4" />
                        </video>
                        <video autoPlay muted loop id="Step2Video" className={showStep === 'get' ? 'w-full' : 'w-full hidden'}>
                            <source src={stage_2_get_eth} type="video/mp4" />
                        </video>
                        <video autoPlay muted loop id="Step3Video" className={showStep === 'bridge' ? 'w-full' : 'w-full hidden'}>
                            <source src={stage_3_bridge} type="video/mp4" />
                        </video>
                        <video autoPlay muted loop id="Step4Video" className={showStep === 'swap' ? 'w-full' : 'w-full hidden'}>
                            <source src={stage_4_swap} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-span-1 mt-12 lg:mt-10"data-aos="fade-left">
                        <div className="grid grid-cols-4 text-lg">
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer -mt-10" onClick={handleClick}>
                                    <img id="create" src={showStep === 'create' ? step1_active : step1} className="h-16" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer" onClick={handleClick}>
                                    <img id="get" src={showStep === 'get' ? step2_active : step2} className="h-16" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer -mt-10" onClick={handleClick}>
                                    <img id="bridge" src={showStep === 'bridge' ? step3_active : step3} className="h-16" />
                                </div>
                            </div>
                            <div className="col-span-1 mb-6">
                                <div className="text-left cursor-pointer" onClick={handleClick}>
                                    <img id="swap" src={showStep === 'swap' ? step4_active : step4} className="h-16" />
                                </div>
                            </div>
                        </div>
                        {stepContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserGuide;
