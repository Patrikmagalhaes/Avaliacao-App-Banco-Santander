import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function App() {
  [valorA, setValorA] = useState(0);
  [valorB, setValorB] = useState(0);
  [resultado, setResultado] = useState(0);

  const somar = () => {
    resultado = parseInt(valorA) + parseInt(valorB);
    setResultado(resultado);
  };
  const subtrair = () => {
    resultado = parseInt(valorA) - parseInt(valorB);
    setResultado(resultado);
  };
  const multiplicar = () => {
    resultado = parseInt(valorA) * parseInt(valorB);
    setResultado(resultado);
  }
  const dividir = () => {
    resultado = parseInt(valorA) / parseInt(valorB);
    setResultado(resultado);
  }

  return (
    <View>
      <Text>Calculadora</Text>
      <TextInput
        placeholder="Primeiro Valor"
        value={valorA}
        onChangeText={setValorA}
      />
      <TextInput
        placeholder="Segundo Valor"
        value={valorB}
        onChangeText={setValorB}
      />
      <Button title="Somar" onPress={somar} />
      <Button title="Subtrair" onPress={subtrair} />
      <Button title="Multiplicar" onPress={multiplicar} />
      <Button title="Dividir" onPress={dividir} />
      <Text>Resultado: {resultado}</Text>
    </View>
  );
}

export default App;