var AvgOnDemand = artifacts.require('./AvgOnDemand.sol')
var AvgOnObserver = artifacts.require('./AvgOnObserver.sol')


module.exports = function (deployer) {
  deployer.deploy(AvgOnDemand)
  deployer.deploy(AvgOnObserver)
}
