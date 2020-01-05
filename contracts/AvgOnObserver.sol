pragma solidity ^0.5.0;

contract AvgOnObserver {
    int256 sum;
	int256 count;
	int256 avg;

	event UpdatedAvg(int256 value);

	function addCalc(int256 n) public {
		sum += n;
		count++;
		avg = sum / count;
		emit UpdatedAvg(avg);
	}
}