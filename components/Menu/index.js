import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import items from "./items";
function Menu() {
  return (
    <View style={styles.menuItems}>
      {items.map((item) => (
        <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesome
              name="music"
              size={24}
              color="white"
              style={styles.icon}
            />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
              {item.subTitle && (
                <Text style={styles.subtitle}>{item.subTitle}</Text>
              )}
            </View>
            <Entypo
              style={styles.arrowIcon}
              name="chevron-right"
              size={24}
              color="#4D4D4E"
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Menu;
