import { Center, Stack, Alert, VStack, HStack, Text, IconButton, CloseIcon } from 'native-base'

function ErrorAlert({ message }) {
  return (
    <Center>
      <Stack space={3} w="90%" maxW="400">
        <Alert w="100%" status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {message}
                </Text>
              </HStack>
              <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              />
            </HStack>
          </VStack>
        </Alert>
      </Stack>
    </Center>
  );
}

export default ErrorAlert;
