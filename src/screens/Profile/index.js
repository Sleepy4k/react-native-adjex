// Import Core Libraries
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';

// Import Styles
import styles from './styles';

// Import Layouts
import { AuthLayout } from '../../layouts';

const Profile = ({ navigation }) => {
  return (
    <AuthLayout navigation={navigation}>
      <View style={styles.profileScreen}>
        <View style={styles.bannerPosition}>
          <Image
            style={styles.bannerPosition}
            resizeMode="cover"
            source={require('../../../assets/banner-2.png')}
          />
        </View>
        <View style={[styles.user, styles.bodyPosition]}>
          <Text style={[styles.username, styles.usernamePosition]}>
            {'Benjamin4k'}
          </Text>
          <Image
            style={styles.userProfile}
            resizeMode="cover"
            source={require('../../../assets/rectangle-51.png')}
          />
          <Text style={[styles.surename, styles.usernamePosition]}>
            {'Apri Pandu Wicaksono'}
          </Text>
        </View>
        <View style={[styles.body, styles.bodyPosition]}>
          <View style={styles.account}>
            <Text style={[styles.akun, styles.akunTypo]}>{'Akun'}</Text>
            <View style={[styles.card5, styles.cardLayout, styles.cardBg]}>
              <Text style={styles.tentangKami}>{'Pilih Bahasa'}</Text>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require('../../../assets/arrow-right.png')}
              />
            </View>
            <View style={[styles.card10, styles.cardLayout, styles.cardBg]}>
              <Text style={styles.tentangKami}>{'Kata Favorit'}</Text>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require('../../../assets/arrow-right.png')}
              />
            </View>
            <View style={[styles.card11, styles.cardLayout]}>
              <Text style={styles.tentangKami}>{'Log Out'}</Text>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require('../../../assets/arrow-right.png')}
              />
            </View>
          </View>
          <View style={[styles.system, styles.bodyPosition]}>
            <Text style={[styles.system1, styles.akunTypo]}>{'System'}</Text>
            <View style={[styles.card13, styles.cardLayout, styles.cardBg]}>
              <Text style={styles.tentangKami}>{'Tentang Kami'}</Text>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require('../../../assets/arrow-right.png')}
              />
            </View>
            <View style={[styles.card12, styles.cardLayout, styles.cardBg]}>
              <Text style={styles.tentangKami}>{'Laporan Bug'}</Text>
              <Image
                style={styles.arrowIcon}
                resizeMode="cover"
                source={require('../../../assets/arrow-right.png')}
              />
            </View>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Profile;
