import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { listServices } from "../actions/serviceAction";
import ServiceCard from "../components/ServiceCard";

const ServicesScreen = () => {
  const dispatch = useDispatch();
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    dispatch(listServices());
  }, [dispatch]);

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
    try {
      setLoadMore(true);
    } catch (e) {}
  };

  // console.log(services);

  return (
    <View style={styles.screen}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.serviceId}
        showsVerticalScrollIndicator={false}
        // onEndReached={handleLoadMore}
        // onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
  },
});

export default ServicesScreen;
