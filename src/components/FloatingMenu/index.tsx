import React from "react";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { handleAddInList } from "../../utils/mockFunctions";
import { ListPeoplesDTO } from "../../dtos/ListPeoplesDTO";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

type Props = {
  functionAddList: (chonseToAdd: ListPeoplesDTO) => void;
};

export function FloatingMenu({ functionAddList }: Props) {
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  function handleClick() {
    const { error, chosenToAdd } = handleAddInList();

    if (!error) {
      functionAddList(chosenToAdd);
    }
  }

  const buttonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[buttonStyle, { position: "absolute", bottom: 13, right: 22 }]}
      >
        <ButtonAnimated
          onPress={handleClick}
          style={[styles.button, { backgroundColor: "orange" }]}
          testID="id-floating-button"
        >
          <AntDesign name="plus" size={24} color="white" />
        </ButtonAnimated>
      </Animated.View>
    </PanGestureHandler>
  );
}
