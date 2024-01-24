import { Pressable } from "react-native";
import { Text } from "../../../../components/Text";

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({ fetchNextPage, hasNextPage }: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text color="primary" bold textAlign="center">Ver mais {''}</Text>
      </Pressable>
    );
  }

  return null
}