import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Times.styles';
import { TIME_LABEL_HEIGHT } from '../utils';
import momemt from 'moment'

const Times = ({ times, textStyle }) => {
  // console.log(momemt(time,'h:mm a').format('h:mm a'))
  return (
    <View style={styles.columnContainer}>
      {times.map((time) => (
        <View key={time} style={[styles.label, { height: TIME_LABEL_HEIGHT }]}>
          <Text style={[styles.text, textStyle]}>{momemt(time,'h:mm a').format('h:mm a')}</Text>
        </View>
      ))}
    </View>
  );
};

Times.propTypes = {
  times: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(Times);
