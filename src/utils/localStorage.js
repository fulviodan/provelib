export function LocalStorage(base) {
	return new Proxy(
		{},
		{
			get(object, key) {
				const item = localStorage.getItem(`${base}.${key}`);
				try {
					return JSON.parse(item);
				} catch (err) {
					return item;
				}
			},
			set(object, key, value) {
				localStorage.setItem(`${base}.${key}`, JSON.stringify(value));

				return true;
			},
			deleteProperty(object, key) {
				localStorage.removeItem(`${base}.${key}`);
				return true;
			},
		}
	);
}
