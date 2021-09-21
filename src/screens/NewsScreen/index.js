import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Container from '../../components/commons/Container';
import styles from './styles';
import NewsItem from '../../components/NewsItem';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {fetchNews} from '../../redux/actions/newsActions';

const NewsScreen = () => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.themeReducer);
  const customStyles = styles(theme);

  const loadingNews = useSelector(state => state.news.loadingNews);
  const news = useSelector(state => state.news.news);

  const renderNews = () => {
    return (
      news &&
      news.map(item => {
        return (
          <TouchableOpacity
            onPress={() => onPressNews(item.link)}
            key={item.title}>
            <NewsItem item={item} />
          </TouchableOpacity>
        );
      })
    );
  };

  const onPressNews = async link => {
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(link, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
        });
      } else {
        const supported = await Linking.canOpenURL(link);
        if (supported) {
          await Linking.openURL(link);
        } else {
          Alert.Alert('Cannot open this link ' + link);
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const getNews = () => {
    fetchNews()(dispatch);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/background_news_tab.png')}
      resizeMode="cover"
      style={customStyles.background}>
      <Container style={styles.container}>
        {/* header */}
        <Text style={customStyles.header}>News</Text>

        {/* news */}
        <View style={customStyles.news}>
          {loadingNews && <ActivityIndicator size="large" color="#999999" />}
          {renderNews()}
        </View>
      </Container>
    </ImageBackground>
  );
};

export default NewsScreen;
