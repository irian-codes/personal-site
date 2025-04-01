import {StyleSheet, View} from '@react-pdf/renderer';
import React from 'react';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {ExperienceSection} from './sections/ExperienceSection';
import {SkillsSection} from './sections/SkillsSection';

export function CvContent() {
  return (
    <React.Fragment>
      <Header />

      <View>
        <ExperienceSection />
        <EducationSection containerStyle={styles.section} />
        <SkillsSection containerStyle={styles.section} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: '0.2cm',
  },
});
