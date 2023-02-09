import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const VisibleTo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibility, setVisibility] = useState("Any one");
  console.log(visibility);
  let label1 = "Anyone";
  let label2 = "Connections Only";
  let label3 = "Group Members";
  var radio_props = [{ value: 0 }, { value: 1 }, { value: 2 }];
  return (
    <View style={styles.centeredTopView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onPressOut={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Who can see this post?</Text>
            <Text>Visible to</Text>
            <View style={styles.radio}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={"grey"}
                selectedButtonColor={"#50C900"}
                animation={true}
                onPress={(value) => {
                  setVisibility(value);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.share}>
          {visibility === 0 ? label1 : visibility === 1 ? label2 : label3}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredTopView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
  },
  centeredView: {
    flexDirection: "row",
    height: 750,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0,
  },

  share: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 2,
    textAlign: "center",
    width: 100,
    height: 25,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "#000",
    width: "100%",
    height: "50%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  radio: {
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default VisibleTo;
