import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Banner from '../components/Banner';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class Privacy extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'Privacy Policy' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.inner ]}>
                    <ScrollView style={{ flex: 1, width: '100%', padding: 10 }}>
                        <View style={[ g.f_r, { marginBottom: 10 } ]}>
                            <Text style={ t.text }>Thank you for choosing to be part of our community at llamaHub. We are committed to protecting your personal information and your rights to privacy. If you have any questions or concerns about our notice, or our practices with regards to your personal information. Please contact us at <Text style={{ color: '#f7f7f7' }}>llamahubapp@gmail.com</Text>.</Text>
                        </View>
                        <View style={[ g.f_r, { marginBottom: 20 } ]}>
                            <Text style={ t.text }>If you choose to use our App, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used exclusively for our service and a better App usage experience. We will not use or share your information with anyone except as described in this Privacy Policy. This privacy notice applies to all information collected through our mobile application, and/or any related services.</Text>
                        </View>
                        <View style={[ g.f_r, { borderColor: '#222', borderWidth: 1, padding: 10, marginBottom: 30 } ]}>
                            <Text style={ t.text }>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</Text>
                        </View>
                        <Banner content={ 'Info Collection and Use' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>For a better experience and service usage, while using our Mobile Application, we Only collect your mobile platform name (Android or iOS). Also we do collect your Epic Username if you are using our Giveaway Service. Apart from this, we do not collect any other personal information.</Text>
                        </View>
                        <Banner content={ 'Will Your Info Be Shared?' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>We may process or publicly share your Epic Username within our App, in case you are Enrolled as our next Giveaway Winner. Your Epic Username is used for identifying and informative purposes only.</Text>
                        </View>
                        <Banner content={ 'How Long Do We Keep Your Info?' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>We do keep your personal data ( Epic Username ) until the enrollment finish. Which means that your data will be automatically removed from our database Every Friday, once we have a new winner.</Text>
                        </View>
                        <Banner content={ 'Do We Keep Your Info Safe?' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our App is at your own risk. You should only access the services within a secure environment.</Text>
                        </View>
                        <Banner content={ 'Links to Other Sites' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>This Application may contain links to other web sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>
                        </View>
                        <Banner content={ 'Children’s Privacy' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>llamaHub mobile application do not address anyone under the age of 13. And do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.</Text>
                        </View>
                        <Banner content={ 'Changes to This Privacy Policy' } />
                        <View style={[ g.f_r, { marginBottom: 30 } ]}>
                            <Text style={ t.text }>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Text>
                        </View>
                        <Banner content={ 'Contact Us' } />
                        <TouchableOpacity style={[ g.f_r, { marginBottom: 50 } ]} onPress={() => Linking.openURL('https://llamahubapp.com/')}>
                            <Text style={ t.text }>If you have any questions or comments about this policy, you can contact us at <Text style={{ color: '#f7f7f7' }}>llamahubapp.com</Text></Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}