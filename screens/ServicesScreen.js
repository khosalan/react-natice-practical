import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { listServices } from "../actions/serviceAction";
import ServiceCard from "../components/ServiceCard";
import Colors from "../constants/colors";

const ServicesScreen = () => {
  const dispatch = useDispatch();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(listServices());
  }, []);

  const serviceList = useSelector((state) => state.serviceList);

  const { loading, services, error } = serviceList;

  const renderItem = ({ item }) => {
    return (
      <ServiceCard
        title={item.title}
        price={item.price}
        duration={item.durationMinutes}
        rating={item.rating}
        ratingCount={item.ratingCount}
        userName={item.owner.name}
      />
    );
  };

  const handleLoadMore = async () => {
    if (isLoadingMore) return;
    try {
      setIsLoadingMore(true);
      await dispatch(listServices(false));
      setIsLoadingMore(false);
    } catch (e) {}
  };

  const renderFooter = () => {
    return (
      isLoadingMore && (
        <View style={styles.footer}>
          <ActivityIndicator size='large' color='black' />
        </View>
      )
    );
  };

  // console.log(services);

  return loading ? (
    <View style={styles.cenetered}>
      <ActivityIndicator size='large' color={Colors.black} />
    </View>
  ) : (
    <View style={styles.screen}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.serviceId}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
    flex: 1,
  },

  footer: {
    marginVertical: 20,
    alignItems: "center",
  },

  empty: {
    alignSelf: "center",
    marginVertical: 5,
  },

  cenetered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ServicesScreen;
