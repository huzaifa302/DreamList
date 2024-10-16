import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../theme';
import style from './style';

const TermOfUse = () => {
  return (
      <ScrollView style={style.container}>
        <Text
          style={style.content}>
          Welcome to Cancer Facility! These terms and conditions outline the
          rules and regulations for the use of Company Name's Website, located
          at Website.com. By accessing this website we assume you accept these
          terms and conditions. Do not continue to use Website Name if you do
          not agree to take all of the terms and conditions stated on this page.
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: “Client”,
          “You” and “Your” refers to you, the person log on this website and
          compliant to the Company's terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
          “Parties”, or “Us”, refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client's
          needs in respect of provision of the Company's stated services, in
          accordance with and subject to, prevailing law of Netherlands. Any use
          of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          THEREfore as referring to same. Cookies We employ the use of cookies.
          By accessing Website Name, you agreed to use cookies in agreement with
          the Company Name's Privacy Policy.
        </Text>
      </ScrollView>
  );
};

export default TermOfUse;
