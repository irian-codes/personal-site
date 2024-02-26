import {StyleSheet, View} from '@react-pdf/renderer';
import React from 'react';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {SkillsSection} from './sections/SkillsSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';

export function CvContent() {
  return (
    <React.Fragment>
      <Header />

      <View style={styles.main}>
        <WorkExperienceSection />
        <EducationSection containerStyle={styles.section} />
        <SkillsSection containerStyle={styles.section} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: '-0.5cm',
  },
  section: {
    marginBottom: '0.5cm',
  },
});
