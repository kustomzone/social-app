import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {colors} from 'lib/styles'
import {observer} from 'mobx-react-lite'
import {AlgoItemModel} from 'state/models/feeds/algo/algo-item'
import {SavedFeedsModel} from 'state/models/feeds/algo/saved'
import AlgoItem from './AlgoItem'

export const SavedFeedItem = observer(
  ({item, savedFeeds}: {item: AlgoItemModel; savedFeeds: SavedFeedsModel}) => {
    const isPinned = savedFeeds.isPinned(item)

    return (
      <View style={styles.itemContainer}>
        <AlgoItem
          key={item.data.uri}
          item={item}
          showBottom={false}
          style={styles.item}
        />
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => {
            savedFeeds.togglePinnedFeed(item)
            console.log('pinned', savedFeeds.pinned)
            console.log('isPinned', savedFeeds.isPinned(item))
          }}>
          <FontAwesomeIcon
            icon="thumb-tack"
            size={20}
            color={isPinned ? colors.blue3 : colors.gray3}
          />
        </TouchableOpacity>
      </View>
    )
  },
)

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  item: {
    borderTopWidth: 0,
  },
})