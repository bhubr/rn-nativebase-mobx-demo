// Source: https://docs.nativebase.io/flat-list
import { useState, useEffect } from "react";
import {
  Text,
  Box,
  Heading,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Button,
} from "native-base";
import { observer } from "mobx-react-lite";
import { fetchUsers } from "./helpers/api";
import ErrorAlert from "./ErrorAlert";

const FlatListExample = ({ store }) => {
  const [error, setError] = useState(null);
  // const [users, setUsers] = useState([]);
  const fetchPage = () =>
    fetchUsers(store.page)
      .then((users) => store.addUsers(users))
      // .then((users) => setUsers(prevUsers => [...prevUsers, ...users]))
      .catch(setError);

  useEffect(() => {
    fetchPage();
  }, []);

  return (
    <Box pt="10" mb="50">
      {error && <ErrorAlert message={error.message} />}
      <Heading fontSize="xl" p="4" pb="3">
        Users ({store.users.length})
      </Heading>
      <Button onPress={fetchPage}>Fetch more</Button>
      <FlatList
        data={store.users}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={2} justifyContent="flex-start">
              <Avatar
                size="48px"
                source={{
                  uri: item.picture,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.catchPhrase}
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.uuid}
      />

    </Box>
  );
};

export default observer(FlatListExample);
