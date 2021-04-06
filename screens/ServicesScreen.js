import React, { useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { listServices } from "../actions/serviceAction";
import ServiceCard from "../components/ServiceCard";

const ServicesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listServices());
  }, []);

  const serviceList = useSelector((state) => state.serviceList);

  const { loading, services, error } = serviceList;

  const renderItem = ({ item }) => {
    return <ServiceCard title={item.title} />;
  };

  const handleLoadMore = async () => {
    try {
      await dispatch(listServices());
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
