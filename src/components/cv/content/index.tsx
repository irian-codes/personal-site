import {StyleSheet, View} from '@react-pdf/renderer';
import React from 'react';
import {Header} from './header/Header';
import {EducationSection} from './sections/EducationSection';
import {OtherSection} from './sections/OtherSection';
import {SkillsSection} from './sections/SkillsSection';
import {WorkExperienceSection} from './sections/WorkExperienceSection';

export function CvContent() {
  return (
    <React.Fragment>
      <Header />

      <View style={styles.main}>
        <WorkExperienceSection />
        <EducationSection />
        <SkillsSection containerStyle={styles.section} />
        <OtherSection containerStyle={[styles.section, {marginBottom: 0}]} />
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
