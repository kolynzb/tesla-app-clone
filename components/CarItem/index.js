import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Menu from "../Menu";
function CarItem() {
  const [locked, setLocked] = useState(true);
  const clickLock = () => {
    setLocked(!locked);
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome name="cog" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>KolynzMobile</Text>
          <TouchableOpacity>
            <FontAwesome5 name="toolbox" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.batterySection}>
          <Image
            source={require("../../assets/battery.png")}
            style={styles.batteryImage}
          />
          <Text style={styles.batteryText}> 150 mi</Text>
        </View>
        {/* status */}
        <View style={styles.status}>
          <Text style={styles.statusHeading}>Parked</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {/* contorl icons */}
          <View style={styles.controls}>
            <TouchableOpacity>
              <View style={styles.controlsButton}>
                <FontAwesome5 name="fan" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.controlsButton}>
                <FontAwesome5 name="key" size={24} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={clickLock}>
              <View style={styles.controlsButton}>
                <FontAwesome5
                  name={locked ? "lock" : "lock-open"}
                  size={24}
                  color="white"
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* menu */}
          <Menu />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default CarItem;
