import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockHeading from '../components/BlockHeading';
import BlockedElement from '../components/BlockedElement';
import Campain from '../components/Campain';
import InboundThreat from '../components/InboundThreat';
import ThreatOrigin from '../components/ThreatOrigin';
import TargetedRecipient from '../components/TargetedRecipient';
import { getBlockedUrls } from '../actions/dashboardData';
import { useDispatch } from 'react-redux';

export default function Dashboard() {
    const [state, setstate] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('this is useeffect');
        dispatch(getBlockedUrls());

        return () => {
            
        };
    }, []);
    return (
        <>
            <div className="dashboard bg-gray-800 text-white">
                <Header />
                <main>
                    <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8 flex">
                        <div className="w-1/4 px-3">
                            <BlockHeading title={'Blocked'} />
                            <BlockedElement blockedTitle="Top URLs Blocked" />
                            <BlockedElement blockedTitle="Top Email Blocked" />
                            <BlockedElement blockedTitle="TLD Blocked" />
                            <BlockedElement blockedTitle="Attachment Blocked" />
                            <BlockedElement blockedTitle="Cusion Rules Blocked" />
                        </div>
                        <div className="w-1/2 px-3">
                            <BlockHeading title={'Insight'} />
                            <InboundThreat />
                            <Campain />
                            <ThreatOrigin />
                            <TargetedRecipient />
                        </div>
                        <div className="w-1/4 px-3">
                            <BlockHeading title={'Risky'} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}