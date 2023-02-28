base_tag = movsesyan/nf-ui


image:
	docker build -t ${base_tag} .
	docker push ${base_tag}

release:
	kubectl apply -f deployment.yaml

redeploy:
	kubectl rollout restart deployment/nf-ui
