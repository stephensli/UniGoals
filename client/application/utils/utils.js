import _ from 'lodash';

export function isMobileDevice() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

export function getAchievedTotalFromUnit(unit) {
  let total = 0;

  _.forEach(unit.content, (content) => {
    if (
      !_.isNil(content.weighting) &&
      !_.isNil(content.achieved) &&
      (content.weighting !== '' && content.achieved !== '')
    ) {
      if (parseFloat(content.achieved) > 0) {
        total += parseFloat(content.weighting) * parseFloat(content.achieved);
      }
    }
  });

  return total;
}

/**
 * Applying the weighiting to all the units, getting the overal unit total and ordering
 * the content based on this information with title, total and a link based on the
 * current active address, this link being a hash link to the table contntes.
 *
 * Finally at the end this is reveresed as the lodash sortBy orders them based on
 * lowest to highest and we need the vice vera.
 * @param {object} units the unit data
 * @param {object} history react-router history object
 */
export function calculateTopFiveRankings(units, history) {
  // return early if the size of the data is either 0 on the units or first unit data.
  if (_.size(units) <= 0 || _.size(units[Object.keys(units)[0]]) <= 0) {
    return 0;
  }

  const totalGradesList = _.map(units, (unit, index) => {
    const totalAchieved = getAchievedTotalFromUnit(unit);

    return {
      title: unit.title,
      total: totalAchieved,
      link: `${history.location.search}#${index}`,
    };
  });

  return _.reverse(_.sortBy(totalGradesList, (o) => o.total));
}

export default isMobileDevice;
