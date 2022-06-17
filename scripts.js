// prettier-ignore
const words = ["shock",  "signal",  "separate",  "tie",  "tour",  "wrestle",  "wait",  "pop",  "attempt",  "mourn",  "pull",  "yawn",  "lock",  "chop",  "suggest",  "puncture",  "dare",  "care",  "melt",  "heat",  "soak",  "comb",  "yell",  "beg",  "practice",  "nod",  "possess",  "saw",  "interfere",  "stir",  "scorch",  "pick",  "rule",  "switch",  "bounce",  "tempt",  "laugh",  "vanish",  "hop",  "balance",  "avoid",  "doubt",  "claim",  "cough",  "shrug",  "found",  "disapprove",  "remember",  "strip",  "open",  "hang",  "recognise",  "bubble",  "place",  "correct",  "stay",  "itch",  "chew",  "belong",  "smoke",  "extend",  "trouble",  "brush",  "reach",  "object",  "press",  "squeak",  "arrive",  "glow",  "arrest",  "wish",  "shelter",  "destroy",  "push",  "accept",  "polish",  "suck",  "chase",  "snatch",  "trade",  "employ",  "spare",  "program",  "embarrass",  "harm",  "inform",  "command",  "spray",  "appear",  "jump",  "curl",  "count",  "decide",  "sprout",  "consist",  "float",  "zip",  "appreciate",  "record",  "land",  "rub",  "visit",  "rain",  "desert",  "carve",  "shade",  "fold",  "jog",  "rush",  "prepare",  "march",  "remove",  "knot",  "pause",  "watch",  "complete",  "fool",  "impress",  "bow",  "want",  "tap",  "burn",  "detect",  "long",  "multiply",  "double",  "dress",  "irritate",  "name",  "hug",  "unite",  "colour",  "behave",  "smell",  "repeat",  "injure",  "produce",  "remind",  "trick",  "collect",  "whisper",  "earn",  "drag",  "afford",  "sparkle",  "owe",  "telephone",  "twist",  "fail",  "dust", 
"abandon", "ability", "able", "about", "above", "absent", "absorb", "abstract", "absurd", "abuse", "access", "accident", "account", "accuse", "achieve", "acid", "acoustic", "acquire", "across", "act", "action", "actor", "actress", "actual", "adapt", "add", "addict", "address", "adjust", "admit", "adult", "advance", "advice", "aerobic", "affair", "afford", "afraid", "again", "age", "agent", "agree", "ahead", "aim", "air", "airport", "aisle", "alarm", "album", "alcohol", "alert", "alien", "all", "alley", "allow", "almost", "alone", "alpha", "already", "also", "alter", "always", "amateur", "amazing", "among", "amount", "amused", "analyst", "anchor", "ancient", "anger", "angle", "angry", "animal", "ankle", "announce", "annual", "another", "answer", "antenna", "antique", "anxiety", "any", "apart", "apology", "appear", "apple", "approve", "april", "arch", "arctic", "area", "arena", "argue", "arm", "armed", "armor", "army", "around", "arrange", "arrest", "arrive", "arrow", "art", "artefact", "artist", "artwork", "ask", "aspect", "assault", "asset", "assist", "assume", "asthma", "athlete", "atom", "attack", "attend", "attitude", "attract", "auction", "audit", "august", "aunt", "author", "auto", "autumn", "average", "avocado", "avoid", "awake", "aware", "away", "awesome", "awful", "awkward", "axis", "baby", "bachelor", "bacon", "badge", "bag", "balance"];
const bubbleTextarea = document.getElementById('bubble-textarea');
const insertionTextarea = document.getElementById('insertion-textarea');
const mergeTextarea = document.getElementById('merge-textarea');
const bubbleTimer = document.getElementById('bubble-sort-timestamp');
const insertionTimer = document.getElementById('insertion-sort-timestamp');
const mergeTimer = document.getElementById('merge-sort-timestamp');

bubbleTextarea.innerText = words.join(', ');
insertionTextarea.innerText = words.join(' ');
mergeTextarea.innerText = words.join(' ');

function bubble(array) {
	let swapped = true;
	do {
		swapped = false;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return array.join(', ');
}

function merge(left, right) {
	let arr = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			arr.push(left.shift());
		} else {
			arr.push(right.shift());
		}
	}

	return [...arr, ...left, ...right];
}

function mergeSort(array) {
	const half = array.length / 2;

	if (array.length < 2) {
		return array;
	}

	const left = array.splice(0, half);
	return merge(mergeSort(left), mergeSort(array));
}

function insertionSort(array) {
	const n = array.length;
	for (let i = 1; i < n; i++) {
		const current = array[i];
		let j = i - 1;
		while (j > -1 && current < array[j]) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}
	return array.join(', ');
}

function sortItems(type) {
	switch (type) {
		case 'bubble':
			document.getElementsByClassName('timestamp-bubble')[0].style.display = 'block';
			const bubbleStart = Date.now();
			bubbleTextarea.innerText = bubble(
				bubbleTextarea.innerHTML.replaceAll(',', '').split(' ')
			);
			bubbleTimer.innerHTML = Date.now() - bubbleStart;
			break;
		case 'insertion':
			document.getElementsByClassName('timestamp-insertion')[0].style.display = 'block';
			const insertionStart = Date.now();
			insertionTextarea.innerText = insertionSort(
				insertionTextarea.innerHTML.replaceAll(',', '').split(' ')
			);
			insertionTimer.innerHTML = Date.now() - insertionStart;
			break;
		case 'merge':
			document.getElementsByClassName('timestamp-merge')[0].style.display = 'block';
			const mergeStart = Date.now();
			mergeTextarea.innerText = mergeSort(
				mergeTextarea.innerHTML.replaceAll(',', '').split(' ')
			).join(', ');
			mergeTimer.innerHTML = Date.now() - mergeStart;
			break;
	}
}

function shuffle(type) {
	switch (type) {
		case 'bubble':
			const bubble = bubbleTextarea.innerHTML.replaceAll(',', '').split(' ');
			const bubbleShuffled = [];
			while (bubble.length) {
				const randomIndex = Math.floor(Math.random() * bubble.length);
				bubbleShuffled.push(bubble[randomIndex]);
				bubble.splice(randomIndex, 1);
			}
			bubbleTextarea.innerText = bubbleShuffled.join(', ');
			break;
		case 'insertion':
			const insertion = insertionTextarea.innerHTML.replaceAll(',', '').split(' ');
			const insertionShuffled = [];
			while (insertion.length) {
				const randomIndex = Math.floor(Math.random() * insertion.length);
				insertionShuffled.push(insertion[randomIndex]);
				insertion.splice(randomIndex, 1);
			}
			insertionTextarea.innerText = insertionShuffled.join(', ');
			break;
		case 'merge':
			const merge = mergeTextarea.innerHTML.replaceAll(',', '').split(' ');
			const mergeShuffled = [];
			while (merge.length) {
				const randomIndex = Math.floor(Math.random() * merge.length);
				mergeShuffled.push(merge[randomIndex]);
				merge.splice(randomIndex, 1);
			}
			mergeTextarea.innerText = mergeShuffled.join(', ');
			break;
	}
}
