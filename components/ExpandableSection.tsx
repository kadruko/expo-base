import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Button,
  ExpandableSection as ExpandableSectionBase,
  Text,
  View,
} from 'react-native-ui-lib';

interface ExpandableSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function ExpandableSection({
  children,
  title,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <ExpandableSectionBase
      expanded={expanded}
      sectionHeader={
        <View paddingH-20 paddingV-10 row center>
          <Text text60 flex>
            {title}
          </Text>
          <Button
            iconSource={() => (
              <Ionicons
                name={expanded ? 'chevron-up' : 'chevron-down'}
                size={28}
                color={'black'}
              />
            )}
            backgroundColor={'transparent'}
            onPress={() => {
              setExpanded(!expanded);
            }}
          />
        </View>
      }
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <View paddingV-10 paddingB-20>
        {children}
      </View>
    </ExpandableSectionBase>
  );
}
